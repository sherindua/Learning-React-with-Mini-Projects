function Keys({ HandleOnClick }) {
  return (
    <>
      <div className="row">
        <div
          className="col text-bg-info p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          C
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          7
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          8
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          9
        </div>
        <div
          className="col text-bg-secondary p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          +
        </div>
      </div>
      <div className="row">
        <div
          className="col text-bg-info p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          =
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          4
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          5
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          6
        </div>
        <div
          className="col text-bg-secondary p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          -
        </div>
      </div>
      <div className="row">
        <div className="col text-bg-info p-3"></div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          1
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          2
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          3
        </div>
        <div
          className="col text-bg-secondary p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          x
        </div>
      </div>

      <div className="row">
        <div className="col text-bg-info p-3"></div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          .
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          0
        </div>
        <div
          className="col text-bg-warning p-3"
          onClick={(event) => HandleOnClick(event)}
        ></div>
        <div
          className="col text-bg-secondary p-3"
          onClick={(event) => HandleOnClick(event)}
        >
          /
        </div>
      </div>
    </>
  );
}

export default Keys;
