
export default function InputArea({ onChange, userInput }) {
    return (
        <div id="user-input">
            <div className="input-group ">
                <p>
                    <label >INITIAL INVESTMENT</label>
                    <input type="number" value={userInput.initial} name="initial" onChange={(event) => onChange(event)} />
                </p>
                <p>
                    <label >ANNUAL INVESTMENT</label>
                    <input type="number" name="annual" value={userInput.annual} onChange={(event) => onChange(event)} />
                </p>
            </div>
            <div className="input-group ">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" value={userInput.expected} name="expected" onChange={(event) => onChange(event)} />
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" value={userInput.duration} name="duration" onChange={(event) => onChange(event)} />
                </p>
            </div>
        </div>
    );
}