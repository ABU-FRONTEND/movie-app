import CardList from '../../Components/CardList/CardList';

const Bookmarked = () => {
    
    return (
        <div>
            <CardList link={'https://movie-app-backend-2.onrender.com/bookmarks'} Qkey={'bookmarks'} type={'Bookmarks'}  />
        </div>
    );
};

export default Bookmarked;
