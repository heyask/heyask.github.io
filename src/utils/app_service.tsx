import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";

export class AppService {
  private static instance: AppService;
  private readonly _app: FirebaseApp | undefined;
  private readonly _analytics: Analytics | undefined | null;

  get app(): FirebaseApp | undefined {
    return this._app;
  }

  get analytics(): Analytics | undefined | null {
    return this._analytics;
  }

  logEvent(eventName: string, eventParams?: { [key: string]: any; }) {
    if (this._analytics) logEvent(this._analytics, eventName, eventParams);
  }

  private constructor() {
    try {
      if (typeof window !== "undefined") {
        this._app = initializeApp({
          apiKey: "AIzaSyCGbO3ePt7beYKT2_zKy_C8-ejHiWWizlI",
          authDomain: "sunriv-blog.firebaseapp.com",
          projectId: "sunriv-blog",
          storageBucket: "sunriv-blog.appspot.com",
          messagingSenderId: "320325927537",
          appId: "1:320325927537:web:55ec0bdfa8f31f573e91d0",
          measurementId: "G-D845K3H5F2"
        });
        this._analytics = typeof window !== "undefined" ? getAnalytics(this._app) : null;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }
}