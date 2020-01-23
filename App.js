import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Right, Button, Left} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Tab0 from './screens/Camera';
import Tab1 from './screens/Chat';
import Tab2 from './screens/Status';
import Tab3 from './screens/Panggilan';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{backgroundColor:"#075E54"}}>
        
        <Header style={{backgroundColor: "#075E54", marginTop: 5, marginBottom: 15}} hasTabs>
          <Left>
            <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}> WhatsApp</Text>
          </Left>
          <Right style={{marginTop: 25}}>
            <Button transparent>
              <Icon name='search' />
            </Button>
            
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Tabs prerenderingSiblingsNumber={1} initialPage={1} tabContainerStyle={{elevation:0}}>
          <Tab heading={ <TabHeading  style={{backgroundColor: "#075E54"}} ><Icon style={{fontSize:25}} name="camera" /></TabHeading>} >
            <Tab0 />
          </Tab>
          <Tab  heading={ <TabHeading  style={{backgroundColor: "#075E54"}}><Text style={{ fontWeight: 'bold'}}>CHAT</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading  style={{backgroundColor: "#075E54"}}><Text style={{fontWeight: 'bold'}}>STATUS</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#075E54"}}><Text style={{fontWeight: 'bold'}}>CALL</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
