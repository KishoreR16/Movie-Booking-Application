import Component from '@glimmer/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
export default class LogoutComponent extends Component {
   
    @service router;
    @service currentUser;
    @action
    logout(){
        console.log("in logout");
        this.currentUser.username=null;
        this.currentUser.password=null;
        this.currentUser.status=false;
        this.router.transitionTo("ticketnew");

    }
}
