import CardList from "../../Components/CardList/CardList"
export default function Movies() {

  return (
    <div>
        <CardList link={'http://localhost:3000/category/movie'} Qkey={'movies'} type={'Movies'}/>
    </div>
  )
}
