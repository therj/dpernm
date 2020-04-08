# For the future!
FROM postgres:12
# Allow
ARG UID=1000
ARG SERVICE_USER="postgres"
# ENV USER="rj"
# RUN groupadd -r ${USER} && adduser ${USER}
RUN usermod -u 1000 ${SERVICE_USER}


# RUN useradd -u $UID -ms /bin/bash $USER
# RUN chmod 777 /var/lib/postgresql/data -R
# RUN whoami
