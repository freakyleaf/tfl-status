const cleanName = (name) => {
  return name
    .replace(' (Bakerloo)', '')
    .replace(' (Circle Line)', '')
    .replace(' (Dist&Picc Line)', '')
    .replace(' (H&C Line)', '')
    .replace(' DLR Station', '')
    .replace(' ELL', '')
    .replace(' Rail Station', '')
    .replace(' Tram Stop', '')
    .replace(' Underground Station', '')
    .replace('-Underground', '')
    .replace('&harr;', 'to')
    .replace('Heathrow Airport', 'Heathrow')
    .replace('London Euston', 'Euston')
    .replace('London Gatwick', 'Gatwick')
    .replace('London Liverpool Street', 'Liverpool Street')
    .replace('London Paddington', 'Paddington')
    .replace('London Southend', 'Southend')
    .replace('Stn', 'Station')
    .replaceAll(' (London)', '')
    .replaceAll('London Waterloo', 'Waterloo') // `replaceAll` required for circular South Western Railway route names
    .replace(/\s+/g, ' ')
    .trim();
};

export default cleanName;
