import React from 'react';
import styles from '../../styles/Player.module.css';
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';
import { PrimarySlider } from '../MaterialComponents';
import { useWindowDimensions } from '../../utils/windowUtils';

function Player({ isSmallPlayer }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className={styles.mainArea} style={{padding: isSmallPlayer ? '0.8rem 0' : '2rem'}}>
        {!isSmallPlayer ? (
          <Container maxWidth="lg" style={{height: "100%"}}>
            <div className={styles.innerArea}>
              <div className={styles.nameArea}>
                <h3 className={styles.title}>
                  <span><i style={{display: "inline-block", marginLeft: "-4rem", cursor: "pointer"}} className={"fas fa-chevron-down"}></i></span>
                  {' '}
                  &nbsp;
                  &nbsp;
                  Forever is True
                </h3>
              </div>
              <div className={styles.imageArea}>
                <img className={styles.playerImage} style={{background: "url('/assets/kit/harryPotter.jpg') no-repeat center center/cover"}} />
              </div>
              <div className={styles.controlArea}>
                <div className={styles.control}>
                  {width > 1200 && (
                    <>
                      <div className={styles.options}>
                        <i className="fas fa-ellipsis-h fa-2x"></i>
                      </div>
                      <div className={styles.pageArea}>
                        <p className={styles.pageText}>Page No <input type="text" value="1" /> / 256</p>
                      </div>
                    </>
                  )}
                  <div className={styles.mediaControl} style={{flex: '3'}}>
                    <div className={styles.mediaArea}>
                      <i className="fas fa-step-backward fa-2x"></i>
                      <i className="fas fa-play-circle fa-3x"></i>
                      <i className="fas fa-step-forward fa-2x"></i>
                    </div>
                  </div>
                  {width > 1200 ? (
                    <>
                      <div className={styles.speedControl}>
                        <div className={styles.speed}>1x</div>
                      </div>
                      <div className={styles.volumeControl}>
                        <i class="fas fa-volume-up fa-2x" style={{display: "inline-block", marginRight: "1rem"}}></i>
                        <PrimarySlider style={{width: '40%'}} defaultValue={20} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                        <div className={styles.pageArea}>
                          <p className={styles.pageText}>Page No <input type="text" value="1" /> / 256</p>
                        </div>
                        <div className={styles.speedControl}>
                          <div className={styles.speed}>1x</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className={styles.track}>
                  <PrimarySlider defaultValue={20} />
                </div>
              </div>
            </div>
          </Container>
        ) : (
          <div className={styles.smallPlayerArea}>
            <div className={styles.smallImageArea}>
              <img className={styles.smallPlayerImage} style={{background: "url('/assets/kit/harryPotter.jpg') no-repeat center center/cover"}} />
            </div>
            <div className={styles.smallControlArea}>
              <h3 className={styles.smallPlayerTitle}>
                <span><i style={{display: "inline-block", cursor: "pointer"}} className={"fas fa-chevron-up"}></i></span>
                {' '}
                &nbsp;
                Forever is True
              </h3>
              {width <= 1200 && (<h4 className={styles.smallPageTitle}>Page - 1</h4>)}
              <div className={styles.smallPlayerControl}>
                {width > 1200 && (
                  <>
                    <div className={styles.pageArea}>
                      <p className={styles.smallPageText}>Page No <input type="text" value="1" /> / 256</p>
                    </div>
                  </>
                )}
                <div className={styles.mediaControl} style={{flex: '3'}}>
                  <div className={styles.mediaArea} style={{justifyContent: width > 1200 ? 'space-around' : 'flex-end'}}>
                    {width > 1200 && (<i className="fas fa-step-backward"></i>)}
                    {width > 1200 ? (<i className="fas fa-play-circle fa-2x"></i>) : (<i className="fas fa-play"></i>)}
                    {width > 1200 && (<i className="fas fa-step-forward"></i>)}
                  </div>
                </div>
                {width > 1200 && (
                  <>
                    <div className={styles.speedControl}>
                      <div className={styles.smallSpeed}>1x</div>
                    </div>
                    <div className={styles.volumeControl}>
                      <i class="fas fa-volume-up" style={{display: "inline-block", marginRight: "1rem"}}></i>
                    </div>
                  </>
                )}
                <div className={styles.smallOptions}>
                  {width > 1200 ? (<i className="fas fa-ellipsis-h"></i>) : (<i className="fas fa-ellipsis-v"></i>)}
                </div>
              </div>
              <div className={styles.track}>
                <PrimarySlider defaultValue={20} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Player;