import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: 'white',
    minHeight: 150,
    borderRadius: 10,
  },
  paddedView: {flex: 3, justifyContent: 'center'},
  productImage: {
    width: 90,
    height: 120,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  paddedView2: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  itemName: {color: colors.textGrey, fontWeight: 'bold'},
  horizontalLine: {marginHorizontal: 10},
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 2,
  },
  priceText: {color: colors.black, fontWeight: 'bold'},
  priceText1: {color: colors.black, textDecorationLine: 'line-through'},
  priceText2: {color: colors.green, fontWeight: 'bold'},
  paddedView3: {flexDirection: 'row', marginHorizontal: 10},
  button: {borderWidth: 1, borderColor: colors.textGreyB},
  quantityText: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.textGreyLight,
    paddingHorizontal: 7,
    paddingTop: 3,
    color: colors.textGreyOpacity7,
    fontSize: 13,
  },
  safeView: {flex: 1, backgroundColor: 'white'},
  homeView: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.textBlue,
  },
  cartStyle: {marginRight: 200, fontWeight: 'bold'},
  orderText: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 17,
  },
  flatView: {
    flex: 1,
    backgroundColor: colors.white,
    width: 440,
    marginLeft: -12,
  },
  mainView2: {flex: 1, backgroundColor: colors.white},
  mainView3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 70,
    backgroundColor: 'white',
  },
  mainView4: {flexDirection: 'column', marginEnd: 20},
  mainView5: {
    backgroundColor: colors.textBlue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 40,
    marginLeft: 20,
  },
  proceedText: {color: colors.white},
});

export default styles;