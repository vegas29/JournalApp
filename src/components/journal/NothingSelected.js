
import AddImage from '../../assets/images/undraw__add.svg';

export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            <p className="nothing__text">
                Select something {''}
                <span>or create an entry!</span>
            </p>

            <div>
                <img
                    src={AddImage}
                    className="nothing__img"
                />
            </div>
        </div>
    )
}
