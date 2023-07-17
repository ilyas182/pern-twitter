import { Fragment, useState } from "react";

export default function PostTweet() {

    const [content, setContent] = useState("");

    const handleTweet = async e => {
        // e.preventDefault();
        try {
            const data = { content };
            const response = await fetch("http://localhost:3000/api/home", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
            console.log(response);
            setContent("");
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            
            <form onSubmit={handleTweet}>
                <input 
                type="text" 
                value={content}
                onChange={e => setContent(e.target.value)}
                />
                <button>Tweet</button>
            </form>
        </Fragment>
    )
}