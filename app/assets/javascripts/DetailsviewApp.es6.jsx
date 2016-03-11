const { $, React, ReactDOM, Redux, ReactRedux,
  ReactBootstrap: { Row, Grid, Panel, Button} } = window

function DetailsviewApp() {
  const Header = () => {
    return(
      <h1>
        <div className="pull-right">
          <div className="btn-group">
            <a href="/" className="btn btn-default">Back</a>
            <a data-toggle="collapse" href="#add-conference-form2"
               className="btn btn-primary">Plan new&hellip;</a>
          </div>
        </div>
        Conferences
      </h1>
    )
  }
  const Form = () => {
    return(
      <div id="add-conference-form2" className="collapse">
        <div className="well">
          <form>
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="ex. wroc_love.rb 2016" />
            </div>             
            <button type="submit" className="btn btn-primary">Plan</button>
          </form>
        </div>
      </div>        
    )
  }

  const Detailsview = () => {
    return(
      <Grid>
        <Row>
          <Header />
          <Form />
        </Row>
      </Grid>
    )
  }

  return {
    ui(){
      return(
        <Detailsview />
      )
    }
  }
}


$(() => {
  $("[data-app='Detailsview']").each(function() {
    const app = DetailsviewApp();

    ReactDOM.render(app.ui(), this);
  })
});
