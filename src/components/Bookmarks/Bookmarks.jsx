import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 text-center  rounded-xl">
            <div className='bg-[#6047EC1A] p-4 rounded-xl'>
                <h1 className="text-2xl text-[#6047EC] font-semibold text-center">Reading Time: {readingTime}</h1>
            </div>

            <div className='bg-[#1111110D] rounded-xl'>
                <h1 className='text-2xl font-semibold  mt-4 py-3  '>Bookmarks: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;