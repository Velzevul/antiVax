import 'babel-polyfill';

import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Faq from './Faq';
import Vaccines from './Vaccines';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Faq} />

      <Route path="/ask-a-question" component={AskQuestion}>
        <IndexRoute component={FrequentQuestions} />
        <Route path="/ask-a-question/frequent/" component={FrequentQuestions}/>
        <Route path="/ask-a-question/search/" component={Search}/>
        <Route path="/ask-a-question/all/" component={AllQuestions}/>
      </Route>

      <Route path="/about-vaccines/" component={AboutVaccines}>
        <IndexRoute component={FrequentQuestions} />

        <Route path="/about-vaccines/vaccines/" component={VaccinesList}>
          <Route path="/about-vaccines/vaccines/:alias" component={Vaccine} />
        </Route>

        <Route path="/about-vaccines/diseases/" component={DiseasesList}>
          <Route path="/about-vaccines/diseases/:alias" component={Disease} />
        </Route>

        <Route path="/about-vaccines/how-vaccines-are-made" component={HowVaccinesAreMade}/>
        <Route path="/about-vaccines/how-vaccines-are-made" component={HowVaccinesAreMade}/>
      </Route>

      <Route path="/vaccine-safety/" component={VaccineSafety}>
        <Route path="/vaccine-safety/ingredients/" component={IngredientsList}>
          <Route path="/vaccine-safety/ingredients/:alias" component={Ingredient} />
        </Route>

        <Route path="/vaccine-safety/:alias" component={Page}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
