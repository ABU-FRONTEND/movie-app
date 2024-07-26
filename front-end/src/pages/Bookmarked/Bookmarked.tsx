import CardList from '../../Components/CardList/CardList';

const Bookmarked = () => {
    
    return (
        <div>
            <CardList link={'http://localhost:3000/bookmarks'} Qkey={'bookmarks'} type={'Bookmarks'}  />
        </div>
    );
};

export default Bookmarked;
