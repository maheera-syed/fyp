import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faComments, faUsers, faShare } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [title, setTitle] = useState('Untitled');
    const [isTitle, setIsTitle] = useState(false);

    return (
        <header className='bg-black text-white p-4 flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <img
                    className='w-20 h-32 object-contain'
                    src={'logo.png'}
                    alt='logo'
                />
                <div>
                    <div className='flex items-center gap-3'>
                        {isTitle ? (
                            <input
                                className='px-0 py-0 rounded-md border-l-transparent text-lg'
                                type='text'
                                placeholder='Your Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        ) : (
                            <p className='px-0 py-0 text-lg'>{title}</p>
                        )}
                        <div
                            className='cursor-pointer'
                            onClick={() => setIsTitle(!isTitle)}
                        >
                            {isTitle ? (
                                <FontAwesomeIcon
                                    className='text-emerald-500 text-2xl'
                                    icon={faCheck}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className='text-primaryText'
                                    icon={faPen}
                                    size='lg'
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                        className='text-white text-lg cursor-pointer'
                        icon={faComments}
                    />
                    <FontAwesomeIcon
                        className='text-white text-lg cursor-pointer'
                        icon={faUsers}
                    />
                    <FontAwesomeIcon
                        className='text-white text-lg cursor-pointer'
                        icon={faShare}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
