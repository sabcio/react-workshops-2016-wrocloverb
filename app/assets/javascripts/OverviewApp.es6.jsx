const { $, React, ReactDOM, Redux, ReactRedux,
  ReactBootstrap: { Row, Grid, Panel, Button} } = window;

function OverviewApp () {
  const initialState = () => {
    return [
      {id: "active-conference", name: "wroc_love.rb 2016"},
      {id: "past-conference", name: "wroc_love.rb 2015"},
    ];
  }
  
  const update = (state=initialState(), action) => {
    return state;
  }

  let store = Redux.createStore(update, initialState());
  
  const stateMapper = (state) => {
    return { conferences: state };
  }
  const dispatchMapper = (dispatch) => { return {}; };
  const connector = ReactRedux.connect(stateMapper, dispatchMapper);


  const Header = () => { 
    return (
      <h1> <div className="pull-right"> <p>
      <a href="/conferences" className="btn btn-primary">Detailed View</a></p>
      </div> Conferences </h1>
    );
  };

  const Overview = ({conferences}) => {
    return (
      <Grid>
        <Row>
          <Header />

          {conferences.map(({id, name}) => {
            return <ConferenceRow key={id} id={id} name={name} />
          })}
        </Row>
      </Grid>
    );
  }

  const ConferenceRow = ({id, name}) => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="pull-right">
            <a href={`/conferences/${id}`}
              className="btn btn-primary btn-xs">Show</a>
          </div>
        <h3 className="panel-title">{name}</h3>
        </div>
      </div>
    );
  };

  const ConnectedOverview = connector(Overview);

  return { 
    ui () {
      return (
        <ReactRedux.Provider store={store}> 
          <ConnectedOverview />
        </ReactRedux.Provider> 
      );
    }
  };
}


$(() => {
  $("[data-app='Overview']").each(function() {
    const app = OverviewApp();

    ReactDOM.render(app.ui(), this);
  })
});
