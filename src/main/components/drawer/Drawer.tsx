import { Global } from '@emotion/react';
import { Box, Button, styled, SwipeableDrawer, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import DrawerSlide from '../drawer-slide/DrawerSlide';

const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
const Puller = styled(Box)(({theme}) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[400] : grey[700],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));
const drawerBleeding = 50;
const isMobile = true//localStorage.mobile || window.navigator.maxTouchPoints > 1;
const Drawer = () => {
    const {palette} = useTheme();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        overflow: 'visible',
                    },
                }}
            />
            {
                !isMobile &&
                <Button onClick={() => setIsDrawerOpen(true)} style={{
                    position: 'absolute', bottom: drawerBleeding, left: 0,
                    right: 0, width: '3rem', margin: 'auto',
                }} variant='contained' color='secondary'>Menu</Button>
            }
            <SwipeableDrawer
                anchor='bottom' disableBackdropTransition={!iOS}
                disableDiscovery={iOS} onClose={() => setIsDrawerOpen(false)}
                onOpen={() => setIsDrawerOpen(true)} open={isDrawerOpen}
                swipeAreaWidth={drawerBleeding} disableSwipeToOpen={false}
                ModalProps={{keepMounted: true}}>
                {
                    isMobile &&
                    <div style={{
                        position: 'absolute', top: -drawerBleeding,
                        borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        visibility: 'visible', right: 0, left: 0,
                        backgroundColor: palette.background.paper
                    }}>
                        <Puller/>
                        <div style={{height: drawerBleeding}}/>
                    </div>
                }
                <div style={{height: '11rem', backgroundColor: palette.background.paper}}>
                    <DrawerSlide onRedirect={() => setIsDrawerOpen(false)}/>
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default Drawer;
