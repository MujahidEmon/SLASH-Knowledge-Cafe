import profile from '../../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mb-3 border-b-2'>
            <h1 className="text-3xl text-center font-bold">SLASH Knowledeg Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;