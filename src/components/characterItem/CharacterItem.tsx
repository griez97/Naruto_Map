import { ICharacter } from '../../../Interface/Character';


interface CharacterData{
    infoMap: ICharacter
}

const CharacterItem: React.FC<CharacterData> = (props) => {
    return ( 
        <div>
            <img src={props.infoMap.img} alt="" />
            <h2>{props.infoMap.name}</h2>
            <p>{props.infoMap.description}</p>
            <p>{props.infoMap.chakraNature}</p>
            <p>{props.infoMap.jutsus}</p>
            <p>{props.infoMap.kekkeiGenkai}</p>
            
        </div>
    );
}

export default CharacterItem;