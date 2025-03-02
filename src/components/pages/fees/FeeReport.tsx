import React from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';

const FeeReport: React.FC = () => {
    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
                年費報表
            </Typography>
            <Paper sx={{ p: 3 }}>
                <Typography variant="body1" color="text.secondary">
                    此功能正在開發中...
                </Typography>
            </Paper>
        </Box>
    );
};

export default FeeReport; 