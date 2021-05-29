    import {useEffect} from 'react';
    import {connect} from 'react-redux'
    import {getCharacters} from '../../store/actions/charactersActions'   
    function CharacterCards({characters, getCharacters}){

        function getCharactersFunction(){
            getCharacters();
        }

        useEffect (()=>{
            getCharactersFunction()
            
        }, [])
            
        return <div>
            {
              characters.map (character=>{
                return <div>
                    <p>{character.name} </p> 
                    <img    
                        src={character.image} 
                        alt ='https://criptotario.com/wp-content/uploads/2018/01/Dogecoin.png' 
                    />
                </div>
               })
            }
        </div>         
    }

    const mapStateToProps= state =>{
        return {
            characters: state.characters
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            getCharacters: character =>{
                dispatch(getCharacters(character));
            }

        }
    }

    export default connect (mapStateToProps, mapDispatchToProps)(CharacterCards)

    //import {useState, useEffect} from 'react';
    // import axios from 'axios';
    // import {CHARACTER_URL} from '../../constants';
    // const  [characters, setCharacters] = useState ([]);
        
        /* function getCharacters(){
            return axios.get(CHARACTER_URL)
            .then(characters => setCharacters(characters.data))
        } */