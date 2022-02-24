import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default function PendingOrdersScreen() {
    return (
        <View style={[stylesBtn.list, { width: '100%' }]}>

            <View style={stylesBtn.itemBG}>
                <View style={stylesBtn.item}>
                    <View style={stylesBtn.itemRow1}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>Ali Super Store</Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>05-12-2019</Text>
                    </View>
                    <View style={stylesBtn.itemRow2}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Order id: </Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>1947034</Text>
                    </View>
                    <View style={stylesBtn.itemRow3}>
                        <View style={stylesBtn.itemRow3Col1}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Quantity: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>3</Text>
                        </View>

                        <View style={stylesBtn.itemRow3Col2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Total Amount: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>Rs 243</Text>
                        </View>

                    </View>

                    <View style={stylesBtn.itemRow4}>
                    <View style={stylesBtn.btn2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.yello]}></Text>
                        </View>

                        <View style={stylesBtn.btn2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.yello]}></Text>
                        </View>

                        <View style={stylesBtn.btn1}>
                            <Text style={[stylesBtn.higlght, stylesBtn.red]}>View Order</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={stylesBtn.itemBG}>
                <View style={stylesBtn.item}>
                    <View style={stylesBtn.itemRow1}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>Ali Super Store</Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>05-12-2019</Text>
                    </View>
                    <View style={stylesBtn.itemRow2}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Order id: </Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>1947034</Text>
                    </View>
                    <View style={stylesBtn.itemRow3}>
                        <View style={stylesBtn.itemRow3Col1}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Quantity: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>3</Text>
                        </View>

                        <View style={stylesBtn.itemRow3Col2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Total Amount: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>Rs 243</Text>
                        </View>

                    </View>

                    <View style={stylesBtn.itemRow4}>
                        <View style={stylesBtn.btn1}>
                            <Text style={[stylesBtn.higlght, stylesBtn.red]}>Details</Text>
                        </View>

                        <View style={stylesBtn.btn2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.yello]}>Reorder</Text>
                        </View>

                        <View style={stylesBtn.btn3}>
                            <Text style={[stylesBtn.higlght, stylesBtn.green]}>Delivered</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={stylesBtn.itemBG}>
                <View style={stylesBtn.item}>
                    <View style={stylesBtn.itemRow1}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>Ali Super Store</Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>05-12-2019</Text>
                    </View>
                    <View style={stylesBtn.itemRow2}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Order id: </Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>1947034</Text>
                    </View>
                    <View style={stylesBtn.itemRow3}>
                        <View style={stylesBtn.itemRow3Col1}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Quantity: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>3</Text>
                        </View>

                        <View style={stylesBtn.itemRow3Col2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Total Amount: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>Rs 243</Text>
                        </View>

                    </View>

                    <View style={stylesBtn.itemRow4}>
                        <View style={stylesBtn.btn1}>
                            <Text style={[stylesBtn.higlght, stylesBtn.red]}>Details</Text>
                        </View>

                        <View style={stylesBtn.btn2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.yello]}>Reorder</Text>
                        </View>

                        <View style={stylesBtn.btn3}>
                            <Text style={[stylesBtn.higlght, stylesBtn.green]}>Delivered</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={stylesBtn.itemBG}>
                <View style={stylesBtn.item}>
                    <View style={stylesBtn.itemRow1}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>Ali Super Store</Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>05-12-2019</Text>
                    </View>
                    <View style={stylesBtn.itemRow2}>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Order id: </Text>
                        <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>1947034</Text>
                    </View>
                    <View style={stylesBtn.itemRow3}>
                        <View style={stylesBtn.itemRow3Col1}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Quantity: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>3</Text>
                        </View>

                        <View style={stylesBtn.itemRow3Col2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Total Amount: </Text>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>Rs 243</Text>
                        </View>

                    </View>

                    <View style={stylesBtn.itemRow4}>
                        <View style={stylesBtn.btn1}>
                            <Text style={[stylesBtn.higlght, stylesBtn.red]}>Details</Text>
                        </View>

                        <View style={stylesBtn.btn2}>
                            <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.yello]}>Reorder</Text>
                        </View>

                        <View style={stylesBtn.btn3}>
                            <Text style={[stylesBtn.higlght, stylesBtn.green]}>Delivered</Text>
                        </View>

                    </View>
                </View>

            </View>
        </View>
    )
}

const stylesBtn = StyleSheet.create({
    list: {

    },
    itemBG: {
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        marginBottom: 12
    },
    item: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 16,
    },
    itemRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemRow2: {
        flexDirection: 'row',
        marginTop: 6
    },
    itemRow3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6
    },
    itemRow3Col1: {
        flexDirection: 'row',
    },
    itemRow3Col2: {
        flexDirection: 'row',
    },
    itemRow4: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 16,
        width: '100%'
    },
    btn1: {
        flex: 1,
        height: 36,
        width: 98,
        borderWidth: 1,
        borderColor: '#F20505',
        borderRadius: 25,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: 'center'
    },
    btn2: {
        flex: 1,
        height: 36,
        width: 98,
        // borderWidth: 1,
        // borderColor: '#F20505',
        borderRadius: 25,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: 'center',
        marginLeft: 20
    },
    btn3: {
        flex: 1,
        height: 36,
        width: 98,
        // borderWidth: 1,
        borderColor: '#F20505',
        borderRadius: 25,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: 'flex-end',
        marginLeft: 20
    },
    higlght: {
        fontSize: 16,
        fontWeight: '600'
    },
    smallfont: {
        fontSize: 14,
    },
    grayFont: {
        color: '#9B9B9B'
    },
    darkFont: {
        color: '#222222'
    },
    red: {
        color: '#F20505'
    },
    yello: {
        color: '#D78C11'
    },
    green: {
        color: '#2AA952'
    },
    margin: {
        marginLeft: 5
    }

});

const styles = StyleSheet.create({

    header: {
        flexDirection: 'column',
        width: '90%',
        marginLeft: '5%',
        marginTop: '3%',
        borderBottomColor: '#F7F7F7',
    },
    TOback: {
        //   flexDirection: 'column'
    },
    backIcon: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
    },
    headerDetails: {
        marginLeft: 15,
        width: '80%'
    },

});