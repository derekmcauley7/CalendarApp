import ember from 'ember';

export default Ember.Controller.extend({
    
    actions:{
        save(){
            this.get('model').save().then(
            ()=> this.transitionToRoute('calendars'),
            ()=> console.log('model did not save')
            );
        },
        cancel(){
            console.log("from the controller");
            this.transitionToRoute('calendars');
            return true;
        }
    
    }

});
