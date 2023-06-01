import React from 'react';

interface button {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ text, isLoading = false, disabled = false, onClick }: button) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading && (
        <div className="w-5 h-5 mr-2 rounded-full animate-spin border-4 border-solid border-grey-500 border-t-transparent"></div>
      )}
      {text}
    </button>
  );
}

export default Button;
