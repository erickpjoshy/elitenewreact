import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { fontSize: 30, position: 'relative', top: -65 },
  section: { marginBottom: 20 },
  text: { fontSize: 12, marginBottom: 10 },
  image: { width: 100, height: 100, marginBottom: 10 },
  qrImage: { width: 50, height: 50 },
  logoImage: { width: 50, height: 30, marginBottom: 20 },
  bold: { fontWeight: 'bold', fontSize: 14 },
  card: {
    backgroundColor: '#ede9e2',
    padding: 20,
    borderRadius: 15,
    // Add any additional styling you need for the card
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    // Add any additional styling you need for the title
  },
  cardItem: {
    marginBottom: 10,
    // Add any additional styling you need for the card items
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerimage: {
    height: '50vh',
    width: '100vw',
    objectFit: 'contain',
    position: 'relative',
    top: -43,
  },
  descriptiontext: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 300,
    lineHeight: '2px',
    letterSpacing: '0px',
    textTransform: 'none',
    direction: 'ltr',
    textAlign: 'justify',
  },
  name: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 300,
    lineHeight: '2px',
    letterSpacing: '0px',
    textTransform: 'none',
    direction: 'ltr',
    textAlign: 'justify',
  },
  overview: {
    display: 'flex',
    gap: '10px',
    padding: '15px',
    borderBottom: '1px solid grey',
  },
});

const Brochure = ({ state }) => (
  <Document>
    <Page size="A4">
      <View>
        <Image style={styles.headerimage} src={state.images[0]} />
      </View>
      <View style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>{state.name}</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>
                <Text style={styles.textlocandhead}>Location: </Text>
                {state.location}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.textlocandhead}>Unit Type: </Text>
                {state.apartmenttype}
              </Text>
            </View>

            <Image style={styles.qrImage} src={state.qrcode.images[0]} />
          </View>

          <Image style={styles.logoImage} src={state.logo.images[0]} />

          <Text style={styles.name}>
            <Text style={styles.name}>Premium Luxury Villas at </Text>
            {state.location}
          </Text>
          <Text style={styles.descriptiontext}>{state.description}</Text>
        </View>
      </View>
    </Page>

    <Page size="A4">
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Project Overview</Text>
        <View style={{ display: 'flex', margin: '10px', fontSize: 15 }}>
          <View style={styles.overview}>
            <Text style={styles.bold}>Location: </Text>
            <Text style={{ fontSize: 12 }}>{state.location}</Text>
          </View>
          <View style={styles.overview}>
            <Text style={styles.bold}>Permit Number: </Text>
            <Text style={{ fontSize: 12 }}>{state.permitno} </Text>
          </View>
          <View style={styles.overview}>
            <Text style={styles.bold}>K-RERA Number: </Text>
            <Text style={{ fontSize: 12 }}> {state.kreranumber}</Text>
          </View>
          <View style={styles.overview}>
            <Text style={styles.bold}>Status: </Text>
            <Text style={{ fontSize: 12 }}> {state.status}</Text>
          </View>
          <View style={styles.overview}>
            <Text style={styles.bold}>Unit Type: </Text>
            <Text style={{ fontSize: 12 }}>
              {state.apartmenttype} BHK Villa
            </Text>
          </View>
          <View style={styles.overview}>
            <Text style={styles.bold}>Area Range: </Text>
            <Text style={{ fontSize: 12 }}> {state.areaRange} Sq ft</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
export default Brochure;
