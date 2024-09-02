import CardList from "../../Components/CardList/CardList"
export default function Movies() {

  return (
    <div>
        <CardList link={'https://movie-app-backend-2.onrender.com/category/movie'} Qkey={'movies'} type={'Movies'}/>
    </div>
  )
}
