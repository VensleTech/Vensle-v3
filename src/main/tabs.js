import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabular =() => (
  <Tabs >
    <TabList  style={{display:'grid', gridTemplateColumns:'repeat(2, auto)', justifyContent:'center', width:'100%'}}>
      <Tab  style={{color:'black', listStyle:'none'}}>Product Description</Tab>
      <Tab style={{color:'black', listStyle:'none'}}>Product Features</Tab>
    </TabList>

    <TabPanel>
      <p>Woven design percolates elegantly into a Patent Quarter. Formal Blucher Oxford Style handsomely capped by a
      gorgeous sole. Stride confidently in comfort with the Injected Memory Foam Cushioned Insole ... Read More</p>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);
export default Tabular