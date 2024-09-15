import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, addTimesRead}) => {
    console.log(blog)
    const {id, title, cover, author, authorImg, readTimes, postedDate, hashtags} = blog
    return (
        <div className='border-b-2 mb-10 space-y-4'>
            <img className='w-[845px] h-[450px] rounded-xl' src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className='flex justify-between mt-5'>
                <div className='flex gap-3'>
                    <img className='w-[50px]' src={authorImg} alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>{author}</h2>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <h2><span>{readTimes}</span> min read</h2>
                    <button onClick={() => handleBookmarks(blog)}><FaBookmark className='text-red-700'></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl mt-3 font-bold">{title}</h2>
            <p className='text-sm mt-3'>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='text-[#11111199]'>{hash} </span>)
                }
            </p>
            <button onClick={() => addTimesRead(readTimes, id)} className='text-purple-600 font-bold underline'>Mark As Read</button>
            <hr className='mt-5 '/>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    addTimesRead: PropTypes.func
}

export default Blog;