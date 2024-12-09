import Characters from '../../../NarutoData.json'
import CharacterItem from '../characterItem/CharacterItem';

const CharacterList = () => {
    return ( 
        <section>
            {
                Characters.map((singleCharacter, index) => (
                    <CharacterItem key={index} infoMap={singleCharacter} />
                ))
            }
        </section>
     );
}
 
export default CharacterList;