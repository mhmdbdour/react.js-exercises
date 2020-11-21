import '../App.css';

function Card(props) {
    return (
        <div className="theCard" >
            <div className="container">

                <div className="card">

                    <div>
                        <div className="tobBack">
                            <i class="fas fa-pencil-alt"></i>
                        </div>

                        <div className="text">
                            <div className="Image">
                                <img className="Imagein" src={props.image} alt={props.name} />
                                <div className="picEdit">
                                    <a href={props.facebook}><p>Edit</p></a>


                                </div>

                            </div >
                            <div className="writes">
                                <h3>{props.name}</h3>
                                <h5>{props.addris}</h5>
                                <h5>{props.job}</h5>
                                <p>{props.disc}</p>
                            </div>
                            <div className="icon">
                                <a href={props.github}><i class="fab fa-github"></i></a>
                            </div>
                            <div className="icon">
                                <a href={props.linkedin}><i class="fab fa-linkedin"></i></a>
                            </div> <div className="icon">
                                <a href={props.facebook}><i class="fab fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div >
    );
}

export default Card;