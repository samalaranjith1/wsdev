 import React, { Component } from 'react'
 
 export default class Button extends Component {

    constructor(props) {
      super(props)
      const list = [
        {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
        },
        {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
        },
        ];
        this.state = {
            list: list,
            searchTerm: '',
            };
            this.onDismiss = this.onDismiss.bind(this);
            this.onSearchChange = this.onSearchChange.bind(this);


    }
    onDismiss(id) {
        const updatedList = this.state.list.filter(item => item.objectID !== id);
        this.setState({ list: updatedList });
        
        }
        onSearchChange() {
            this.setState({ searchTerm: e.target.value });

            }
       
    
   render() {
     return (
        <div className="App">
        { this.state.list.map(item =>
     <div key={item.objectID}>
        <form>
<input type="text" onChange={this.onSearchChange} />
</form>
{ this.state.list.filter(...).map(item =>)}

     <span>
     <a href={item.url}>{item.title}</a>
     </span>
     <span>{item.author}</span>
     <span>{item.num_comments}</span>,
     <span>{item.points}</span>
     <span>
<button
onL
onClick={() => this.onDismiss(item.objectID)}
type="button"
>  
Dismiss
</button>

</span>
     </div>
     )}
     </div>
     );
     }
     }