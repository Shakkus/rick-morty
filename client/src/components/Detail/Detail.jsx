import useCharacter from "../../Hooks/useCharacter";

const Detail = () => {
    const character = useCharacter();
    return (
        <div>
            <h3>Name: {character?.name }</h3>
            <h3>Specie: {character?.species}</h3>
            <h3>Gender: {character?.gender}</h3>
            <h3>Origin: {character?.origin?.name}</h3>
            <h3>Status: {character?.status}</h3>
            <img src={character?.image} alt="" />
        </div>
    )
}

export default Detail;