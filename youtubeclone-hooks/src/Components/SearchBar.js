import React, { useState } from 'react';

const SearchBar = ( {onFormSubmit} ) => {
    const [term, setTerm] = useState('');
        const inputChangeHandler = (e) => {
                //this.setState({term:e.target.value});
                setTerm(e.target.value);
            };
        
          const onFormSubmitHandler = e => {
                e.preventDefault();
                //this.props.onFormSubmit(this.state.term);
                onFormSubmit(term);
                
            };
            return(
                            <div className="search-bar ui segment">
                                <form onSubmit={onFormSubmitHandler} className="ui form">
                                    <div className="field">
                                        <label>Search Videos</label>
                                        <input
                                            type="text" 
                                            value={term} 
                                            onChange={inputChangeHandler}
                                        />
                                    </div>
                                </form>
                            </div>  
            );
}

// class SearchBar extends React.Component{

//     state={term:''};

//     inputChangeHandler = (e) => {
//         //e.preventDefault();
//         //console.log(e.target.value);
//         this.setState({term:e.target.value});
//     };

//     onFormSubmitHandler = e => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state.term);
        
//     };

//     render(){
//         return(
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmitHandler} className="ui form">
//                     <div className="field">
//                         <label>Search Videos</label>
//                         <input
//                             type="text" 
//                             value={this.state.term} 
//                             onChange={this.inputChangeHandler}
//                         />
//                     </div>
//                 </form>
//             </div>    
//         ); 
//     }
// }

export default SearchBar ;