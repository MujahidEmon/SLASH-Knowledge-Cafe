import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover, author, authorImg, readTimes, postedDate, hashtags} = blog
    return (
        <div className='border-b-2 mb-10'>
            <img className='w-[845px] h-[450px] rounded-xl' src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className='flex justify-between mt-5'>
                <div className='flex gap-3'>
                    <img className='w-[50px]' src={authorImg} alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>{author}</h2>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <h2><span>{readTimes}</span> min read</h2>
                </div>
            </div>
            <h2 className="text-3xl mt-3 font-bold">{title}</h2>
            <p className='text-sm mt-3'>
                {
                    hashtags.map(hash => <span className='text-[#11111199]'>{hash} </span>)
                }
            </p>
            <hr className='mt-5 '/>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;