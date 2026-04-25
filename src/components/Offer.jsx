import {Target, Dot, Rocket, MoveRight, Phone} from 'lucide-react';

export default function Offer(){
    return (
        <section className="flex flex-col justify-center items-center ">
            <div>
                Limited Time Offer
            </div>
            <h1>
                Ready to Ace Your Exams with Confdence?
            </h1>
            <p>
                Join thousands of successful students who achieved their dreams with our comprehensive study materials and expert guidance.
            </p>
            <div>
                <Target />
                <div><span>50K+</span> Students</div>
                <Rocket />
                <div><span>98%</span> Success Rate</div>
            </div>
            <button>
                Get Started Free <MoveRight />
            </button>
            <p>
                | OR CALL <span><Phone /> +91 85958 XXX41</span>
            </p>
            <p>
                FREE CONSULTATION <Dot /> 24/7 SUPPORT
            </p>
        </section>
    );
}