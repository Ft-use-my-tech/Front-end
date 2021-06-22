




export const Login = () => {
    const history = useHistory();

    const onChange = e => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = e => {
        e.preventDefault()
        axios.post('', formValues)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const [formValues, setFormValues] = useState(formValsInit)

    return(
        <div className='container'>
            <h2>Login</h2>
                <form className='form-container' onSubmit={onSubmit}>
                    <input
                        value={}
                        onChange={}
                        name='username'
                        type='text'
                        placeholder='Username'
                    />
                    <input
                        value={}
                        onChange={}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </form>
        </div>
    )
}