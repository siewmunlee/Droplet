const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    scrollContainer: {
        flex: 1,
      },
      containerBackground: {
        backgroundColor: '#F0F0F0'
      },
      container: {
        padding: 20,
      },
      textCon: {
        marginTop: 10,
        width: 280,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      moodCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative"
      },
      box: {
        marginTop: 10,
        height: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
          height: 1,
          width: -2
        },
        elevation: 2,
        paddingTop: 10
      },
      profileImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
      },
      name: {
        fontSize: 35,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#1E90FF',
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      bottomText:{ 
        fontSize: 15, 
        marginBottom: 20, 
        fontWeight: 'bold', 
        marginTop: 0, 
        color: '#41aff4',
      },
      endText:{ 
        fontSize: 20, 
        marginBottom: 20, 
        fontWeight: 'bold', 
        marginTop: 50, 
        color: '#41aff4',
      },
      value: {
        fontWeight: 'bold',
        fontSize: 20
      },
      leftMarker: {
        marginLeft: -10,
        marginTop: -10,
        fontSize: 13,
        fontWeight: 'bold',
        color: 'green'
      },
      rightMarker : {
        marginRight: -10,
        marginTop: -10,
        fontSize: 13,
        fontWeight: 'bold',
        color: 'red'
      },
      button: {
        width: 90,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        margin: 10,
        elevation: 4,
      },
      icon: {
        width: 35,
        height: 35,
      },
      nextButton : {
        position: 'absolute', 
        left: 80,
        marginTop: 50
      },
      prevButton : {
        position: 'absolute', 
        right: 50,
        marginTop: 50
      }
};
