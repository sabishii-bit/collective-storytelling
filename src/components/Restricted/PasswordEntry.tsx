"use client";

import React, { useState } from 'react';

interface PasswordEntryProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  header?: string;
  errorMessage?: string;
  buttonText?: string;
}

const PasswordEntry: React.FC<PasswordEntryProps> = ({ 
  onSuccess, 
  onError, 
  header = "",
  errorMessage,
  buttonText = "Access Content"
}) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPassword('');
        onSuccess?.();
      } else {
        const errorMessage = data.error || 'Authentication failed';
        setError(errorMessage);
        onError?.(errorMessage);
      }
    } catch {
      const errorMessage = 'Network error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{header}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter password"
            disabled={isLoading}
          />
        </div>
        
        {(error || errorMessage) && (
          <div className="text-red-600 text-sm">{errorMessage || error}</div>
        )}
        
        <button
          type="submit"
          disabled={isLoading || !password.trim()}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Authenticating...' : buttonText}
        </button>
      </form>
    </div>
  );
};

export default PasswordEntry;