import style from './QuizOption.module.css'

function QuizOption({title}){
    return (
        <details className={style.details}>
            <summary className={style.summary}>{title}</summary>
            <div className={style.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt a vel tempora similique. Nam, placeat voluptatum? Vel alias quas neque autem. Nobis odio temporibus minima quis repellendus est illum?</p>
            </div>
        </details>
    );
}

export default QuizOption;