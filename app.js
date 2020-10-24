console.log("App.js is running");

// JavaScript Extension - JSX

const app = {
    title : 'Indecision App',
    subtitle : 'Your Decision Maker',
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log('form submitted');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp();
        console.log(app.options);
    }
};

const resetAll = () => {
    app.options = [];
    renderCounterApp();
    console.log(app.options);
};

const appRoot = document.getElementById("app");

const numbers = [55,101,1000];

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    console.log(randNum);
    var selectedOption = app.options[randNum];
    alert(selectedOption);
};

const renderCounterApp = () =>{
    const template = (
        <div>
            <h1>Title: {app.title}</h1>
            {app.subtitle && <p>SubTitle: {app.subtitle}</p>}
            <p>{app.options.length}</p>
            <ol>
            {
                app.options.map((value) => {
                    return <li key={value}>Value: {value}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button disabled = {app.options == 0} onClick={onMakeDecision}>What should I do</button>
                <button onClick = {resetAll}>Remove All</button>
                {
                   // [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
                   //numbers.map((number) => {
                     //  return <p key={number}>Number: {number}</p>;
                  // })
                }
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderCounterApp();

/*const user = {
    name : 'Vishal',
    age : 19,
    location : 'Singrauli'

};

function getLocation(location){
    if(location)
        return <p>Location : {location}</p>;
    
}


const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >18) && <p>age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);*/



