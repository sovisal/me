import React from "react";
import { Card } from 'antd';

const App: React.FC = () => {
    return (
        <Card title="Card title" loading={false} bordered={false}>
            Card content
        </Card>
    );
};

export default App;
