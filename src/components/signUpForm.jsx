import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SET_USER, SET_ROLES } from '../actions/clientActions';

// Create Axios instance
const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

// Turkish phone number regex
const phoneRegex = /^(\+90|0)?[1-9][0-9]{9}$/;

// Zod schema for form validation
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
      message: "Password must include lowercase, uppercase, number, and special character"
    }),
  confirmPassword: z.string(),
  role_id: z.string(),
  store: z.object({
    name: z.string().min(3, { message: "Store name must be at least 3 characters long" }).optional(),
    phone: z.string().regex(phoneRegex, { message: "Invalid Turkish phone number" }).optional(),
    tax_no: z.string().regex(/^T\d{3}V\d{6}$/, { message: "Invalid Tax ID format" }).optional(),
    bank_account: z.string().regex(/^TR\d{2}\d{5}[A-Z0-9]{17}$/, { message: "Invalid IBAN" }).optional(),
  }).optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Axios request functions
const apiRequests = {
  fetchRoles: async () => {
    try {
      const response = await api.get('/roles');
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : 'Error fetching roles');
    }
  },
  
  signUp: async (data) => {
    try {
      const response = await api.post('/signup', data);
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : 'Error signing up');
    }
  },
};

export default function SignUpForm() {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      role_id: '1', // Assuming '1' is the ID for Customer role
    }
  });

  const selectedRole = watch('role_id');

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesData = await apiRequests.fetchRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error('Signup error:', error.message);
        alert("Failed to load roles. Please try again.");
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await apiRequests.signUp(data);
      dispatch(SET_USER(response.user));
      history.goBack(); // Go back to previous page
      alert("You need to click the link in your email to activate your account!");
      console.log(response);
    } catch (error) {
      console.error('Signup error:', error.message);
      alert("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <p className="mb-6">Create your account</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block">Name</label>
            <input
              id="name"
              {...register('name')}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block">Password</label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword')}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="block">Role</label>
            <Controller
              name="role_id"
              control={control}
              render={({ field }) => (
                <select {...field} className="w-full px-3 py-2 border rounded">
                  {roles.map((role) => (
                    <option key={role.id} value={role.id.toString()}>
                      {role.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {selectedRole === '2' && ( // Assuming '2' is the ID for Store role
            <>
              <div className="space-y-2">
                <label htmlFor="storeName" className="block">Store Name</label>
                <input
                  id="storeName"
                  {...register('store.name')}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.store?.name && <p className="text-sm text-red-500">{errors.store.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="storePhone" className="block">Store Phone</label>
                <input
                  id="storePhone"
                  {...register('store.phone')}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.store?.phone && <p className="text-sm text-red-500">{errors.store.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="storeTaxId" className="block">Store Tax ID</label>
                <input
                  id="storeTaxId"
                  {...register('store.tax_no')}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.store?.tax_no && <p className="text-sm text-red-500">{errors.store.tax_no.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="storeBankAccount" className="block">Store Bank Account (IBAN)</label>
                <input
                  id="storeBankAccount"
                  {...register('store.bank_account')}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.store?.bank_account && <p className="text-sm text-red-500">{errors.store.bank_account.message}</p>}
              </div>
            </>
          )}

          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600" 
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
