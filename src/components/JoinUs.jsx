export default function JoinUs(){
    return (
        <section>
            <div>
                Partner With Us
            </div>
            <h1>
                Promote Your Learning Platform To Thousands Of Students
            </h1>
            <p>
                Want to promote your courses, study materials, or learning platform?
            </p>
            <h3>
                Submiit your platform and connect with students looking for the best resources for their exams and studies.
            </h3>

            <form className="grid">
                <label>
                    Platform Name
                    <imput type="text" placeholder="Enter your platform name" />
                </label>
                <label>
                    Website URL
                    <input type="link" placeholder="https://yourwebsite.com" />
                </label>
                <label>
                    Promotion Type
                    <select>
                        <option>Select Option</option>
                        <option>
                            Course Promotion
                        </option>
                        <option>
                            Study Materials
                        </option>
                        <option>
                            Mock tests
                        </option>
                        <option>
                            Live Classes
                        </option>
                        <option>
                            Question Bank
                        </option>
                        <option>
                            Other
                        </option>
                    </select>
                </label>
                <label>
                    Target Exams/Classes
                    <input type="text" placeholder="Example: NEET, JEE, Class 10, Class 12" />
                </label>
                <label>
                    Message
                    <textArea type="text" placeholder="Tell us about your platform, courses, or resources you want to promote" rows="5" />
                </label>
                <button type="submit">Submit promotion Request</button>
            </form>
        </section>
    );
}