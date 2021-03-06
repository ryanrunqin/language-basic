import React, {Component} from 'react';

import PropTypes from 'prop-types';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            age: props.iAge,
            theeValue: 1024
        }
        
    }

    increaseAge(){
        
        this.setState({
            age: this.state.age + 3
        })
        console.log(this.state.age);
        
    }

    handleGreet(){
        this.props.greet(this.state.age);
    }

    onChangee(event){
        this.setState({theeValue: event.target.value});
        console.log(event.target.value);
        this.props.passToHeader(event.target.value)
    }
    
    passToHeaderMethod(){
        let theInputTxt = document.getElementById('theInputTxt');

        this.props.passToHeader( parseInt(theInputTxt.value) + 1);
    }
    

    render(){
        var theStyle ={border:'1px solid red'}
        let content = "";
        if(true){
            content = "I am the content";
        }
        console.log('render');
        
        return(
            <div className="container" style={theStyle}>
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <h1>Home</h1>
                        {2 + 2}
                        <br/>
                        {'aa'}
                        <br/>
                        {content}
                        <br/>
                        {true?'lol':'Doat2'}
                        <br/>
                        <ul>
                        {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
                        </ul>
                        <br/>
                        {this.state.age}
                        <br/>
                        The name is: {this.props.name}
                        <button onClick={() => {this.increaseAge()}} className="btn btn-primary">This is a button</button>
                        <hr />
                        <button onClick={() => {this.props.greet(this.state.age);}}  className="btn btn-primary">This is aa button</button>
                        <hr />
                        <input id="theInputTxt" type="text" onChange={(event) => {this.onChangee(event)}} defaultValue ={this.state.theeValue}/>
                        <button onClick={() => {this.passToHeaderMethod()}}  className="btn btn-primary">Pass to Header</button>
                    </div>
                    
                    {/*嵌入在父组件里的Home作为child */}
                    <h3>{this.props.children}</h3>
                </div>
            </div>
        );
    }
}

// To check types
// 确保传入参数的正确性
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func
}
