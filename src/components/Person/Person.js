import React, {Component} from 'react'
import classes from './Person.css'

class Person extends Component{
    render(){
        console.log(classes)
        return(
            <div>
                <p className={classes.someOther}>using someOther</p>
                <p className={classes.content}>using content</p>
            </div>
        )
    }
}

export default Person