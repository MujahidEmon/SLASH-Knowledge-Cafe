import { useState } from 'react'
import './App.css'
import './index.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const addTimesRead = (time, id) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    console.log('removed id', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <div className='lg:w-[1280px] mx-auto'>
        <Header></Header>
        <div className='flex gap-14 p-4  '>
          <Blogs 
          handleBookmarks = {handleBookmarks}
          addTimesRead = {addTimesRead}
          ></Blogs>
          <Bookmarks 
          bookmarks = {bookmarks}
          readingTime = {readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
