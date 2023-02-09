import React, { useState } from 'react';
import { preferenceData } from '../preferenceData';

export const PreferenceAccordion = ({ title, content, status }) => {
  const [isActive, setIsActive] = useState(false);

  const [data, setData] = useState(preferenceData);

	const onChange = (index) => {
    setData(
      data.map((item) =>
        item.index === index ? { ...item, status: !item.status } : item
      )
    );
  }

  
  return (
    <div className="w-full border border-[#cdcdcd]">
      <div className="w-full p-[10px] flex justify-between items-center"  onClick={() => setIsActive(!isActive)}>
        <div className='flex gap-x-[16px] justify-start items-center font-light'>
          <span className='text-[25px]'>{isActive ? '-' : '+'}</span>
          <span>{title}</span>
        </div>
        {
          title === 'Essential cookies' ? (
            <span>Always Active</span>
          ) : (
            <label className="relative inline-flex items-center cursor-pointer">
            <input
            type="checkbox"
            value={status}
            name={title}
            className="sr-only peer"
            onChange={onChange}
             />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          </label>
          )
        }

      </div>
      {isActive && <div className="bg-[#F5F5F5] text-[#59595B] px-[28px] py-[16px] font-light text-[20px]">{content}</div>}
    </div>
  );
};

