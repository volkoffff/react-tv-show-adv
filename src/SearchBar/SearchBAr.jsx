export function SearchBar({onSubmit}) {

    function submit(e) {
        if (e.key == "Enter" && e.target.value.trim() != "") {
            console.log(e.target.value);
            onSubmit(e.target.value)
        }
    }

    return(
        <>
            <input type="text" placeholder="search..." onKeyUp={submit}/>
        </>
    );

}