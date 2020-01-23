import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Fab, View, Icon, Content } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaIRmJD8ECfo8AlLwe90Qy8sIDvVDXHjFmGjS3oBHP1d-s_x9x' }} />
              </Left>
              <Body>
                <Text>Leonardo Dicaprio</Text>
                <Text note><Icon name="redo" style={{color: "green"}} />Yesterday, 21:45</Text>
              </Body>
              <Right>
                <Button transparent>
                    <Icon name="videocam" style={{color: '#075E54'}}/>
                </Button>
              
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQmqjNsXgYHCEtXKIfbt8K9ngCpmE6jecsZIF22ecQqd3L5ZKk' }} />
              </Left>
              <Body>
                <Text>Tony Stark</Text>
                <Text note style={{marginRight: 5}}><Icon name="undo" style={{color: "green"}} />Yesterday, 21:45</Text>
              </Body>
              <Right>
                <Button transparent>
                    <Icon name="call" style={{color: 'red'}}/>
                </Button>
                
              </Right>
            </ListItem>
          </List>
        </Content>

      </Container>
    );
  }
}
